import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Button, Grid, Typography } from '@mui/joy';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { autoEnabledState } from '../atoms/autoEnabledState';
import { canGoBackState } from '../atoms/canGoBackState';
import { openHistoryState } from '../atoms/openHistoryState';
import { openSettingsState } from '../atoms/openSettingsState';
import { reloadInterfaceDataEventState } from '../atoms/reloadInterfaceDataEventState';
import { skipEnabledState } from '../atoms/skipEnabledState';
import ModalDialogCustom from '../components/ModalDialog';
import TextMenuButton from '../components/TextMenuButton';
import { addQuickSave, goBack, loadGameSave, loadQuickSave, saveGame } from '../utility/ActionsUtility';
import { useMyNavigate } from '../utility/useMyNavigate';

export default function QuickActions() {
    const setOpenSettings = useSetRecoilState(openSettingsState);
    const setOpenHistory = useSetRecoilState(openHistoryState);
    const navigate = useMyNavigate();
    const canGoBack = useRecoilValue(canGoBackState)
    const notifyLoadEvent = useSetRecoilState(reloadInterfaceDataEventState);
    const [openYouSure, setOpenYouSure] = useState(false)
    const [skip, setSkip] = useRecoilState(skipEnabledState)
    const [auto, setAuto] = useRecoilState(autoEnabledState)
    const { t } = useTranslation(["translation"]);

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-end"
                spacing={2}
                sx={{
                    height: "100%",
                    width: "100%",
                    paddingLeft: { xs: 1, sm: 2, md: 4, lg: 6, xl: 8 },
                    position: "absolute",
                    marginBottom: 0,
                    bottom: 0,
                }}
            >
                <Grid
                    paddingY={0}
                >
                    <TextMenuButton
                        onClick={() => goBack(navigate, () => { notifyLoadEvent((prev) => prev + 1) })}
                        disabled={!canGoBack}
                    >
                        {t("back")}
                    </TextMenuButton>
                </Grid>
                <Grid
                    paddingY={0}
                >
                    <TextMenuButton
                        onClick={() => setOpenHistory(true)}
                    >
                        {t("history")}
                    </TextMenuButton>
                </Grid>
                <Grid
                    paddingY={0}
                >
                    <TextMenuButton
                        selected={skip}
                        onClick={() => setSkip((prev) => !prev)}
                    >
                        {t("skip")}
                    </TextMenuButton>
                </Grid>
                <Grid
                    paddingY={0}
                >
                    <TextMenuButton
                        selected={auto}
                        onClick={() => setAuto((prev) => !prev)}
                    >
                        {t("auto_forward_time_restricted")}
                    </TextMenuButton>
                </Grid>
                <Grid
                    paddingY={0}
                >
                    <TextMenuButton
                        onClick={saveGame}
                    >
                        {t("save")}
                    </TextMenuButton>
                </Grid>
                <Grid
                    paddingY={0}
                >
                    <TextMenuButton
                        onClick={() => loadGameSave(navigate, () => notifyLoadEvent((prev) => prev + 1))}
                    >
                        {t("load")}
                    </TextMenuButton>
                </Grid>
                <Grid
                    paddingY={0}
                >
                    <TextMenuButton
                        onClick={addQuickSave}
                    >
                        {t("quick_save_restricted")}
                    </TextMenuButton>
                </Grid>
                <Grid
                    paddingY={0}
                >
                    <TextMenuButton
                        onClick={() => setOpenYouSure(true)}
                        disabled={!localStorage.getItem("quickSave")}
                    >
                        {t("quick_load_restricted")}
                    </TextMenuButton>
                </Grid>
                <Grid
                    paddingY={0}
                >
                    <TextMenuButton
                        onClick={() => setOpenSettings(true)}
                    >
                        {t("settings_restricted")}
                    </TextMenuButton>
                </Grid>
            </Grid >

            <ModalDialogCustom
                open={openYouSure}
                setOpen={setOpenYouSure}
                color="primary"
                head={<Typography level="h4"
                    startDecorator={<CloudDownloadIcon />}
                >
                    {t("load")}
                </Typography>}
                actions={<>
                    <Button
                        key={'exit'}
                        color='primary'
                        variant="outlined"
                        onClick={() => {
                            loadQuickSave(navigate, () => notifyLoadEvent((prev) => prev + 1))
                            setOpenYouSure(false)
                        }}
                        startDecorator={<CloudDownloadIcon />}
                    >
                        {t("confirm")}
                    </Button>
                    <Button
                        key={'cancel'}
                        color="neutral"
                        variant="plain"
                        onClick={() => setOpenYouSure(false)}
                    >
                        {t("cancel")}
                    </Button>
                </>}
            >
                <Typography>
                    {t("you_sure_to_quick_load")}
                </Typography>
            </ModalDialogCustom>
        </>
    );
}
