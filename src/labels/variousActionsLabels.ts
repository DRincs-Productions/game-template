import { ChoiceMenuOption, newLabel, setChoiceMenuOptions, setDialogue } from "@drincs/pixi-vn";

export const orderProductLabel = newLabel("OrderProductLabel",
    [
        () => setDialogue(`OK! Let's see, let's look for a book....`),
        () => {
            setDialogue(`Here's R****, for $1. Just the thing for me.`)
        },
    ]
)

export const takeKeyLabel = newLabel("TakeKeyLabel",
    [
        () => {
            setDialogue(`Are these the car keys?! Well... I should try to access the car!`)
        },
    ]
)

const talkSleepResultLabel = newLabel("TalkSleepResultLabel",
    [
        () => setDialogue("[mc]!!!! What are you doing?!!"),
        () => setDialogue("Get out of here! Now!"),
    ]
)
export const talkSleepLabel = newLabel("TalkSleepLabel",
    [
        async () => {
            setDialogue("zZz zZz ...")
            setChoiceMenuOptions([
                new ChoiceMenuOption(
                    "Try waking up",
                    talkSleepResultLabel
                ),
                // TODO: new ChoiceMenuOptionClose("Leave her alone"),
            ])
        },
    ]
)

export const aliceTalkMenuLabel = newLabel("AliceTalkMenuLabel",
    [
        async () => {
        },
    ]
)