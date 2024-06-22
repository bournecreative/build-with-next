import { HeroComponent } from "@/components/heroComponent"
import heroImg from '/public/performance.jpg'

const Performance = () => {
    return (
        <div>
            <HeroComponent heroImage={heroImg} altText="welding" heroText="Performance"/>
        </div>
    )
}

export default Performance