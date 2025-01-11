import { narration } from '@drincs/pixi-vn';
import { useQueryClient } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { nextStepLoadingState } from '../atoms/nextStepLoadingState';
import { skipEnabledState } from '../atoms/skipEnabledState';
import { typewriterIsAnimatedState } from '../atoms/typewriterIsAnimatedState';
import useAutoInfoStore from '../stores/useAutoInfoStore';
import { INTERFACE_DATA_USE_QUEY_KEY } from '../use_query/useQueryInterface';
import { useMyNavigate } from '../utils/navigate-utility';

export default function SkipAutoInterceptor() {
    const navigate = useMyNavigate();
    const { t: tNarration } = useTranslation(["narration"]);
    const skipEnabled = useRecoilValue(skipEnabledState)
    const { enabled: autoEnabled, time: autoTime } = useAutoInfoStore((state) => state)
    const typewriterIsAnimated = useRecoilValue(typewriterIsAnimatedState)
    const [recheckSkip, setRecheckSkip] = useState<number>(0)
    const { enqueueSnackbar } = useSnackbar();
    const setNextStepLoading = useSetRecoilState(nextStepLoadingState);
    const queryClient = useQueryClient()

    const nextOnClick = useCallback(async () => {
        setNextStepLoading(true);
        try {
            if (!narration.canGoNext) {
                setNextStepLoading(false);
                return;
            }
            narration.goNext({
                t: tNarration,
                navigate,
                notify: (message, variant) => enqueueSnackbar(message, { variant }),
            })
                .then(() => {
                    queryClient.invalidateQueries({ queryKey: [INTERFACE_DATA_USE_QUEY_KEY] })
                    setNextStepLoading(false);
                })
                .catch((e) => {
                    setNextStepLoading(false);
                    console.error(e);
                })
            return;
        } catch (e) {
            setNextStepLoading(false);
            console.error(e);
            return;
        }
    }, [tNarration, queryClient])

    useEffect(() => {
        // Debouncing
        let timeout = setTimeout(() => {
            if (skipEnabled) {
                nextOnClick().then(() => {
                    setRecheckSkip((p) => p + 1)
                })
            }
        }, 400);

        return () => {
            clearTimeout(timeout)
        }
    }, [skipEnabled, recheckSkip, nextOnClick])

    useEffect(() => {
        if (skipEnabled) {
            return
        }
        if (autoEnabled && !typewriterIsAnimated) {
            if (autoTime) {
                let millisecond = autoTime * 1000
                // Debouncing
                let timeout = setTimeout(() => {
                    if (autoEnabled && !skipEnabled) {
                        nextOnClick()
                    }
                }, millisecond);

                return () => {
                    clearTimeout(timeout)
                }
            }
        }
    }, [autoTime, autoEnabled, typewriterIsAnimated, skipEnabled, nextOnClick])

    return null
}
