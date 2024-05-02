import { CharacterBaseModel, ChoiceMenuOptionsType, GameStepManager, GameWindowManager, getCharacterById, getChoiceMenuOptions, getDialogue } from '@drincs/pixi-vn';
import { Button } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { autoEnabledState } from '../atoms/autoEnabledState';
import { canGoBackState } from '../atoms/canGoBackState';
import { reloadInterfaceDataEventState } from '../atoms/reloadInterfaceDataEventState';
import { skipEnabledState } from '../atoms/skipEnabledState';
import { typewriterDelayState } from '../atoms/typewriterDelayState';
import DragHandleDivider from '../components/DragHandleDivider';
import Typewriter from '../components/Typewriter';
import { resizeWindowsHandler } from '../utility/ComponentUtility';
import DialogueMenu from './DialogueMenu';

export default function Dialogue() {
    const [windowSize, setWindowSize] = useState({
        x: 0,
        y: 300 * GameWindowManager.screenScale,
    });
    const [imageSize, setImageSize] = useState({
        x: 300 * GameWindowManager.screenScale,
        y: 0,
    })

    const [loading, setLoading] = useState(false)
    const [text, setText] = useState<string | undefined>(undefined)
    const [character, setCharacter] = useState<CharacterBaseModel | undefined>(undefined)
    const [menu, setMenu] = useState<ChoiceMenuOptionsType | undefined>(undefined)
    const setCanGoBack = useSetRecoilState(canGoBackState);
    const [reloadInterfaceDataEvent, notifyReloadInterfaceDataEvent] = useRecoilState(reloadInterfaceDataEventState);
    const skipEnabled = useRecoilValue(skipEnabledState)
    const autoEnabled = useRecoilValue(autoEnabledState)
    const [recheckSkipAuto, setRecheckSkipAuto] = useState<number>(0)
    const { t } = useTranslation(["translation"]);
    const typewriterDelay = useRecoilValue(typewriterDelayState)

    useEffect(() => {
        let dial = getDialogue()
        if (dial) {
            setText(dial.text)
            let c: CharacterBaseModel | undefined = dial.characterId ? getCharacterById(dial.characterId) : undefined
            if (!c && dial.characterId) {
                c = new CharacterBaseModel(dial.characterId, { name: t(dial.characterId) })
            }
            setCharacter(c)
        }
        else {
            setText(undefined)
            setCharacter(undefined)
        }
        let m = getChoiceMenuOptions()
        setMenu(m)
        setCanGoBack(GameStepManager.canGoBack)
    }, [reloadInterfaceDataEvent])

    useEffect(() => {
        if (skipEnabled || autoEnabled) {
            nextOnClick()
        }
    }, [skipEnabled, recheckSkipAuto, autoEnabled])


    useEffect(() => {
        window.addEventListener('keydown', onkeydown);

        return () => {
            window.removeEventListener('keydown', onkeydown);
        };
    }, []);

    function onkeydown(event: KeyboardEvent) {
        if (event.code == 'Enter' || event.code == 'Space') {
            nextOnClick()
        }
    }

    function nextOnClick() {
        if (loading) {
            return
        }
        setLoading(true)
        GameStepManager.runNextStep()
            .then(() => {
                notifyReloadInterfaceDataEvent((p) => p + 1)
                setLoading(false)
                if (skipEnabled) {
                    setTimeout(() => {
                        setRecheckSkipAuto((p) => p + 1)
                    }, 200);
                }
                else if (autoEnabled) {
                    let autoForwardSecond = localStorage.getItem('auto_forward_second')
                    if (autoForwardSecond) {
                        let millisecond = parseInt(autoForwardSecond) * 1000
                        setTimeout(() => {
                            setRecheckSkipAuto((p) => p + 1)
                        }, millisecond);
                    }
                }
            })
            .catch((e) => {
                setLoading(false)

                console.error(e)
            })
    }

    return (
        <>
            {menu && <DialogueMenu
                dialogueWindowHeight={windowSize.y + 50}
                fullscreen={text ? false : true}
                menu={menu}
                afterClick={() => notifyReloadInterfaceDataEvent((p) => p + 1)}
            />}
            <Box
                sx={{
                    width: '100%',
                    position: "absolute",
                    bottom: { xs: 14, sm: 18, md: 20, lg: 24, xl: 30 },
                    left: 0,
                    right: 0,
                }}
            >
                {text && <DragHandleDivider
                    orientation="horizontal"
                    sx={{
                        position: "absolute",
                        top: -5,
                        width: "100%",
                        pointerEvents: "auto",
                    }}
                    onMouseDown={(e) => resizeWindowsHandler(e, windowSize, setWindowSize)}
                />}
                {text && <Card
                    orientation="horizontal"
                    sx={{
                        overflow: 'auto',
                        height: windowSize.y,
                        gap: 1,
                        pointerEvents: "auto",
                    }}
                >
                    {character?.icon && <AspectRatio
                        flex
                        ratio="1"
                        maxHeight={"20%"}
                        sx={{
                            height: "100%",
                            minWidth: imageSize.x,
                        }}
                    >
                        <img
                            src={character?.icon}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>}
                    {character?.icon && <DragHandleDivider
                        orientation="vertical"
                        onMouseDown={(e) => resizeWindowsHandler(e, imageSize, setImageSize)}
                        sx={{
                            width: 0,
                            left: -8,
                        }}
                    />}
                    <CardContent>
                        {character && <Typography fontSize="xl" fontWeight="lg"
                            sx={{
                                position: "absolute",
                                top: 7,
                                color: character.color,
                            }}

                        >
                            {character.name + (character.surname ? " " + character.surname : "")}
                        </Typography>
                        }
                        <Sheet
                            sx={{
                                marginTop: character ? 3 : undefined,
                                bgcolor: 'background.level1',
                                borderRadius: 'sm',
                                p: 1.5,
                                minHeight: 10,
                                display: 'flex',
                                flex: 1,
                                overflow: 'auto',
                            }}
                        >
                            {typewriterDelay !== 0
                                ? <Typewriter
                                    text={t(text)}
                                    delay={localStorage.getItem('typewriter_delay_millisecond')! as unknown as number}
                                />
                                : t(text)}
                        </Sheet>
                    </CardContent>
                </Card>}
                {!menu && <Button
                    variant="solid"
                    color="primary"
                    size="sm"
                    loading={loading}
                    sx={{
                        position: "absolute",
                        bottom: -10,
                        right: 0,
                        width: { xs: 70, sm: 100, md: 150 },
                        border: 3,
                        zIndex: 100,
                        pointerEvents: "auto",
                    }}
                    onClick={nextOnClick}
                >
                    {t("next")}
                </Button>}
            </Box>
        </>
    );
}
