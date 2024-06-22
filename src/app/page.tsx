import homeImg from '/public/home.jpg'
import { HeroComponent } from '@/components/heroComponent'

export default function Home() {
  return (
    <HeroComponent heroImage={homeImg} altText='car assembly line' heroText='Home Page' />
  );
}
