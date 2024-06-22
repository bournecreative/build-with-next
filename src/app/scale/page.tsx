import { HeroComponent } from "@/components/heroComponent"
import heroImg from '/public/scale.jpg'

const Scale = () => {
    return (
        <HeroComponent heroImage={heroImg} altText="industrial factory with cranes" heroText="Scale Text"/>
    )
}

export default Scale