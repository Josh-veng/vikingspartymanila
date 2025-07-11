export class Splash {
    initSplash = () => {
        const splashComponent = document.querySelector("#splash-component")
        const splashTime = setTimeout(() => {
            splashComponent.classList.add('hide')
            clearTimeout(splashTime)
        }, 3500)
    }
}