import { HeroComponent } from "@/components/heroComponent"
import heroImg from '/public/reliability.jpg'

const Reliability = () => {
    return (
         <HeroComponent heroImage={heroImg} altText="industrial factory with cranes" heroText="Welder welding"/>
    )
}

export default Reliability

