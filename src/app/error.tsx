"use client" //los errores de cualquier classe tienen que ser de 'tipo cliente'
import Image from 'next/image';
import styles from 'app/sass/global-error.module.sass';

export default function GlobalError({reset}: ErrorPageProps) {
    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Error</h1>
            <Image
                src='/images/error.png'
                width={400}
                height={400}
                alt='error'
            />
            <p className={styles.Error__message}>Ha ocurrido un error</p>
            <button className={styles.Error__button} onClick={reset}>Volver a intentar</button>
        </main>
    )
}