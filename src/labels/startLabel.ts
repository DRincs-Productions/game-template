import { setCurrentRoom, timeTracker } from "@drincs/nqtr";
import { narration, newLabel, setFlag } from "@drincs/pixi-vn";
import { aliceQuest } from "../quests/aliceQuest";
import { timeSlots } from "../values/constants";
import { mcRoom } from "../values/rooms";

const START_LABEL_ID = "start_label_id"
const GO_TO_NAVIGATION_FATHER_LABEL_ID = "go_to_navigation_label_id"
const GO_TO_NAVIGATION_LABEL_ID = "go_to_navigation_label_id2"

export const startLabel = newLabel(START_LABEL_ID,
    [
        (props) => {
            timeTracker.settings = {
                defaultTimeSpent: 1,
                maxDayHours: 24,
                minDayHours: 0,
                timeSlots: [
                    { name: timeSlots.morning.description, startHour: timeSlots.morning.value },
                    { name: timeSlots.afternoon.description, startHour: timeSlots.afternoon.value },
                    { name: timeSlots.evening.description, startHour: timeSlots.evening.value },
                    { name: timeSlots.night.description, startHour: timeSlots.night.value },
                ],
                weekDaysNames: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
                weekendStartDay: 6,
                weekLength: 7,
            }
            setCurrentRoom(mcRoom)
            setFlag("weekend", timeTracker.isWeekend)
            setFlag("not_weekend", !timeTracker.isWeekend)
            aliceQuest.start(props)
            narration.callLabel(goToNavigationFather, props)
        },
        ({ navigate }) => {
            console.error("There was an error in the game.")
            navigate('/')
        },
    ]
)

/**
 * This label ensures that even when {@link goToNavigation} is closed, {@link goToNavigation} is reopened.
 */
const goToNavigationFather = newLabel(GO_TO_NAVIGATION_FATHER_LABEL_ID,
    () => {
        return [
            (props) => narration.callLabel(goToNavigation, props),
            (props) => narration.jumpLabel(GO_TO_NAVIGATION_FATHER_LABEL_ID, props),
        ]
    }
)

/**
 * This label causes the player to return to navigation after completing a dialogue.
 * This label creates a loop, causing the game to never end.
 * Only if a jump is called immediately after this label, it will be terminated, moving on to the father label.
 */
const goToNavigation = newLabel(GO_TO_NAVIGATION_LABEL_ID,
    () => {
        return [
            ({ navigate }) => navigate('/navigation'),
            (props) => narration.jumpLabel(GO_TO_NAVIGATION_FATHER_LABEL_ID, props),
        ]
    }
)
