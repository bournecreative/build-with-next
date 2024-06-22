import Image, { StaticImageData } from 'next/image'

interface HeroComponentProps {
    heroImage: StaticImageData
    altText: string
    heroText: string
}

export const HeroComponent:React.FC<HeroComponentProps> = ({heroImage, heroText, altText}) => {
    return (
        <div  className='relative h-screen'>
            <div className='absolute -z-10 inset-0'>
                <Image src={heroImage} alt={altText} fill style={{ objectFit: 'cover'}} />
            </div>
            <div className="pt-48 flex justify-center items-center">
                <h1 className='text-white text-6xl'>
                    {heroText}
                </h1>
            </div>
        </div>
    )
}