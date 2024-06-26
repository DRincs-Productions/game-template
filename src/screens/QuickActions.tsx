import { ModalConfirmation, Stack, Typography } from '@drincs/react-components';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { autoEnabledState } from '../atoms/autoEnabledState';
import { canGoBackState } from '../atoms/canGoBackState';
import { hideInterfaceState } from '../atoms/hideInterfaceState';
import { openHistoryState } from '../atoms/openHistoryState';
import { openSettingsState } from '../atoms/openSettingsState';
import { reloadInterfaceDataEventState } from '../atoms/reloadInterfaceDataEventState';
import { skipEnabledState } from '../atoms/skipEnabledState';
import TextMenuButton from '../components/TextMenuButton';
import { addQuickSave, goBack, loadGameSave, loadQuickSave, saveGame } from '../utility/ActionsUtility';
import { useMyNavigate } from '../utility/useMyNavigate';

export default function QuickActions() {
    const setOpenSettings = useSetRecoilState(openSettingsState);
    const setOpenHistory = useSetRecoilState(openHistoryState);
    const navigate = useMyNavigate();
    const notifyLoadEvent = useSetRecoilState(reloadInterfaceDataEventState);
    const [openYouSure, setOpenYouSure] = useState(false)
    const { t } = useTranslation(["translation"]);
    const hideInterface = useRecoilValue(hideInterfaceState)
    const [skip, setSkip] = useRecoilState(skipEnabledState)
    const [auto, setAuto] = useRecoilState(autoEnabledState)
    const canGoBack = useRecoilValue(canGoBackState)

    return (
        <>
            <AnimatePresence>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-end"
                    spacing={{ xs: 0.5, sm: 1, md: 2 }}
                    sx={{
                        height: "100%",
                        width: "100%",
                        paddingLeft: { xs: 1, sm: 2, md: 4, lg: 6, xl: 8 },
                        position: "absolute",
                        marginBottom: 0,
                        bottom: 0,
                    }}
                    component={motion.div}
                    variants={{
                        open: {
                            opacity: 1,
                            y: 0,
                        },
                        closed: {
                            opacity: 0,
                            y: 8,
                        }
                    }}
                    initial={"closed"}
                    animate={hideInterface ? "closed" : "open"}
                    exit={"closed"}
                    transition={{ type: "tween" }}
                >
                    <TextMenuButton
                        onClick={() => goBack(navigate, () => { notifyLoadEvent((prev) => prev + 1) })}
                        disabled={!canGoBack}
                        sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                    >
                        {t("back")}
                    </TextMenuButton>
                    <TextMenuButton
                        onClick={() => setOpenHistory(true)}
                        sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                    >
                        {t("history")}
                    </TextMenuButton>
                    <TextMenuButton
                        selected={skip}
                        onClick={() => setSkip((prev) => !prev)}
                        sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                    >
                        {t("skip")}
                    </TextMenuButton>
                    <TextMenuButton
                        selected={auto}
                        onClick={() => setAuto((prev) => !prev)}
                        sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                    >
                        {t("auto_forward_time_restricted")}
                    </TextMenuButton>
                    <TextMenuButton
                        onClick={saveGame}
                        sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                    >
                        {t("save")}
                    </TextMenuButton>
                    <TextMenuButton
                        onClick={() => loadGameSave(navigate, () => notifyLoadEvent((prev) => prev + 1))}
                        sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                    >
                        {t("load")}
                    </TextMenuButton>
                    <TextMenuButton
                        onClick={addQuickSave}
                        sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                    >
                        {t("quick_save_restricted")}
                    </TextMenuButton>
                    <TextMenuButton
                        onClick={() => setOpenYouSure(true)}
                        disabled={!localStorage.getItem("quickSave")}
                        sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                    >
                        {t("quick_load_restricted")}
                    </TextMenuButton>
                    <TextMenuButton
                        onClick={() => setOpenSettings(true)}
                        sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                    >
                        {t("settings_restricted")}
                    </TextMenuButton>
                </Stack >
            </AnimatePresence>

            <ModalConfirmation
                open={openYouSure}
                setOpen={setOpenYouSure}
                color="primary"
                headText={t("load")}
                onClick={() => {
                    loadQuickSave(navigate, () => notifyLoadEvent((prev) => prev + 1))
                    return true
                }}
                confirmText={t("confirm")}
                cancelText={t("cancel")}
                startDecorator={<CloudDownloadIcon />}
            >
                <Typography>
                    {t("you_sure_to_quick_load")}
                </Typography>
            </ModalConfirmation>
        </>
    );
}
