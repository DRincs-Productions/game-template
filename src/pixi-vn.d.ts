declare module '@drincs/pixi-vn/dist/override' {
    interface StepLabelResult {
        /**
         * The new route to navigate to.
         */
        newRoute?: string
    }
    interface StepLabelProps {
        /**
         * function to navigate to a new route.
         * @param route The route to navigate to.
         * @returns 
         */
        navigate: (route: string) => void
    }
}
