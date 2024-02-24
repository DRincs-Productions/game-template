import { ExportedStorage } from "../classes/ExportedStorage"

export class GameStorageManager {
    private static oidsUsed: string[] = []
    private static storage: object = {}
    private constructor() { }
    public static get keysSystem() {
        return {
            CURRENT_DIALOGUE_MEMORY_KEY: "current_dialogue_memory_key"
        }
    }
    public static getNewOid(): string {
        let oid = ""
        do {
            oid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        } while (GameStorageManager.oidsUsed.includes(oid))
        GameStorageManager.oidsUsed.push(oid)
        return oid
    }
    public static setVariable<T>(key: string, value: T) {
        key = key.toLowerCase()
        if (GameStorageManager.hasOwnProperty(key)) {
            (GameStorageManager.storage as any)[key] = value
        }
    }
    public static getVariable<T>(key: string): T | undefined {
        key = key.toLowerCase()
        if (GameStorageManager.hasOwnProperty(key)) {
            return (GameStorageManager.storage as any)[key]
        }
        return undefined
    }
    public static clear() {
        GameStorageManager.oidsUsed = []
        GameStorageManager.storage = {}
    }
    public static export(): ExportedStorage {
        return {
            storage: GameStorageManager.storage,
            stepOidUsedList: GameStorageManager.oidsUsed
        }
    }
    public static import(data: object) {
        GameStorageManager.clear()
        try {
            if (data.hasOwnProperty("storage")) {
                GameStorageManager.storage = (data as ExportedStorage)["storage"] as object
            }
            else {
                console.log("No storage data found")
            }
            if (data.hasOwnProperty("stepOidUsedList")) {
                GameStorageManager.oidsUsed = (data as ExportedStorage)["stepOidUsedList"] as string[]
            }
            else {
                console.log("No stepOidUsed data found")
            }
        }
        catch (e) {
            console.error("Error importing data", e)
        }
    }
}
