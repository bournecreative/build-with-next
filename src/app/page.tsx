import Link from 'next/link'

import styles from "./page.module.css";

export default function Home() {
  return (
   <div>
    <div>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </div>
    Home Page
   </div>
  );
}
