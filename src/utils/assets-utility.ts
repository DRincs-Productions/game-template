import { Assets } from "@drincs/pixi-vn"

/**
 * Define all the assets that will be used in the game.
 * This function will be called before the game starts.
 * You can read more about assets management in the documentation: https://pixi-vn.web.app/start/assets-management.html
 */
export async function defineAssets() {
    // backgrounds
    Assets.add({ alias: 'background_main_menu', src: "https://andreannaking.com/wp-content/uploads/2021/12/Download-Beautiful-Nature-Landscape-Hd-Wallpaper-Full-HD-Wallpapers.jpg" })
    // location
    Assets.add({ alias: 'location_myroom-0', src: "https://raw.githubusercontent.com/DRincs-Productions/NQTR-System/main/game/images/location/myroom-0.webp" })
    Assets.add({ alias: 'location_myroom-1', src: "https://raw.githubusercontent.com/DRincs-Productions/NQTR-System/main/game/images/location/myroom-1.webp" })
    Assets.add({ alias: 'location_myroom-2', src: "https://raw.githubusercontent.com/DRincs-Productions/NQTR-System/main/game/images/location/myroom-2.webp" })
    Assets.add({ alias: 'location_myroom-3', src: "https://raw.githubusercontent.com/DRincs-Productions/NQTR-System/main/game/images/location/myroom-3.webp" })
    // The game will not start until these asserts are loaded.
    await Assets.load('background_main_menu')

    // The game will start immediately, but these asserts will be loaded in the background.
    // Assets.load('flowerTop')

}
