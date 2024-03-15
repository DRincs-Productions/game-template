import { Label } from "../lib/classes/Label";
import { CanvasImage } from "../lib/classes/canvas/CanvasImage";
import { TickerRotate } from "../lib/classes/ticker/TickerRotate";
import { labelDecorator } from "../lib/decorators/LabelDecorator";
import { clearDialogue, setDialogue } from "../lib/functions/DialogueUtility";
import { addImage, removeImage, showCanvasImages, showImageWithDisolveEffect } from "../lib/functions/ImageUtility";
import { GameWindowManager } from "../lib/managers/WindowManager";
import { StepLabelType } from "../lib/types/StepLabelType";

@labelDecorator()
export class ShowImageTest extends Label {
    override get steps(): StepLabelType[] {
        return [
            async () => {
                setDialogue("You can also add a image to the canvas with the function showImage. If use await the user not can continue until the image is loaded.")
                let bunny1 = addImage("bunny1", "https://pixijs.com/assets/eggHead.png")
                await bunny1.load()
                bunny1.x = 100
                bunny1.y = 100
                let bunny2 = addImage("bunny2", "https://pixijs.com/assets/flowerTop.png")
                bunny2.x = 300
                bunny2.y = 100
                bunny1.load()
            },
            () => {
                removeImage(["bunny1", "bunny2"])
                setDialogue("You can also remove a image from the canvas with the function removeImage.")
            },
            async () => {
                setDialogue("If you want to show more images at the same time, you can use the function showCanvasImages.")
                let alien1 = addImage("alien1", 'https://pixijs.com/assets/eggHead.png')
                alien1.x = 100
                alien1.y = 100
                let alien2 = addImage("alien2", 'https://pixijs.com/assets/flowerTop.png')
                alien2.x = 300
                alien2.y = 100
                await showCanvasImages([alien1, alien2])
            },
            async () => {
                removeImage(["alien1", "alien2"])
                let alien = addImage("alien", 'https://pixijs.com/assets/eggHead.png')
                GameWindowManager.addTicker("alien", new TickerRotate({ speed: 0.1 }))
                alien.anchor.set(0.5);
                alien.x = 100
                alien.y = 100
                await alien.load()
                setDialogue("You can also show a image with a effect with the function showImageWithEffect")
            },
            async () => {
                clearDialogue()
                let image = addImage("alien", 'https://pixijs.com/assets/flowerTop.png')
                await image.load()
            },
            () => {
                showImageWithDisolveEffect("alien", 'https://pixijs.com/assets/eggHead.png', 0.01)
                setDialogue("You can also show a image with a dissolve effect with the function showImageWithDisolveEffect")
            },
            () => {
                let alien = GameWindowManager.getCanvasElement<CanvasImage>("alien")
                if (alien) alien.alpha = 1
                setDialogue("If you want to remove the dissolve effect, you can change the alpha=1 of the image.")
            },
        ]
    }
}