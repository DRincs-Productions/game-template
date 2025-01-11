import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, Stack, useTheme } from '@mui/joy';
import { useQueryClient } from '@tanstack/react-query';
import { motion } from "motion/react";
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { openGameSaveScreenState } from '../atoms/openGameSaveScreenState';
import { openHistoryScreenState } from '../atoms/openHistoryScreenState';
import { openSettingsState } from '../atoms/openSettingsState';
import { saveLoadAlertState } from '../atoms/saveLoadAlertState';
import { skipEnabledState } from '../atoms/skipEnabledState';
import TextMenuButton from '../components/TextMenuButton';
import useAutoInfoStore from '../stores/useAutoInfoStore';
import useInterfaceStore from '../stores/useInterfaceStore';
import { INTERFACE_DATA_USE_QUEY_KEY, useQueryCanGoBack } from '../use_query/useQueryInterface';
import useQueryLastSave, { LAST_SAVE_USE_QUEY_KEY } from '../use_query/useQueryLastSave';
import { SAVES_USE_QUEY_KEY } from '../use_query/useQuerySaves';
import { goBack } from '../utils/actions-utility';
import { useMyNavigate } from '../utils/navigate-utility';
import { putSaveIntoIndexDB } from '../utils/save-utility';

export default function QuickTools() {
    const setOpenSettings = useSetRecoilState(openSettingsState);
    const setOpenHistory = useSetRecoilState(openHistoryScreenState);
    const openSaveScreen = useSetRecoilState(openGameSaveScreenState);
    const navigate = useMyNavigate();
    const setOpenLoadAlert = useSetRecoilState(saveLoadAlertState);
    const { t } = useTranslation(["ui"]);
    const hideInterface = useInterfaceStore((state) => state.hidden);
    const setHideInterface = useInterfaceStore((state) => state.editHidden);
    const [skip, setSkip] = useRecoilState(skipEnabledState)
    const autoEnabled = useAutoInfoStore((state) => state.enabled)
    const editAutoEnabled = useAutoInfoStore((state) => state.editEnabled)
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient()
    const { data: lastSave = null } = useQueryLastSave()
    const { data: canGoBack = null } = useQueryCanGoBack()

    return (
        <>
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
                    onClick={() => goBack(navigate).then(() => queryClient.invalidateQueries({ queryKey: [INTERFACE_DATA_USE_QUEY_KEY] }))}
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
                    selected={autoEnabled}
                    onClick={editAutoEnabled}
                    sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                >
                    {t("auto_forward_time_restricted")}
                </TextMenuButton>
                <TextMenuButton
                    onClick={() => openSaveScreen(true)}
                    sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                >
                    {t(`${t("save")}/${t("load")}`)}
                </TextMenuButton>
                <TextMenuButton
                    onClick={() => {
                        putSaveIntoIndexDB()
                            .then((save) => {
                                queryClient.setQueryData([SAVES_USE_QUEY_KEY, save.id], save);
                                queryClient.setQueryData([LAST_SAVE_USE_QUEY_KEY], save);
                                enqueueSnackbar(t("success_save"), { variant: 'success' })
                            })
                            .catch(() => {
                                enqueueSnackbar(t("fail_save"), { variant: 'error' })
                            })
                    }}
                    sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                >
                    {t("quick_save_restricted")}
                </TextMenuButton>
                <TextMenuButton
                    onClick={() => lastSave && setOpenLoadAlert({ open: true, data: lastSave, type: 'load' })}
                    disabled={!lastSave}
                    sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                >
                    {t("load_last_save_restricted")}
                </TextMenuButton>
                <TextMenuButton
                    onClick={() => setOpenSettings(true)}
                    sx={{ pointerEvents: !hideInterface ? "auto" : "none" }}
                >
                    {t("settings_restricted")}
                </TextMenuButton>
            </Stack >
            <IconButton
                onClick={setHideInterface}
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                }}
                component={motion.div}
                variants={{
                    open: {
                        opacity: 1,
                        x: 0,
                        pointerEvents: "auto",
                    },
                    closed: {
                        opacity: 0,
                        x: 8,
                        pointerEvents: "none",
                    }
                }}
                initial={"closed"}
                animate={!hideInterface ? "closed" : "open"}
                exit={"closed"}
                transition={{ type: "tween" }}
            >
                <VisibilityOffIcon
                    sx={{
                        color: useTheme().palette.neutral[500],
                    }}
                />
            </IconButton>
        </>
    );
}
