import {Inter,Roboto_Mono,Fraunces,Cormorant} from '@next/font/google';
import localFont from '@next/font/local';

export const inter=Inter({subsets:['latin'],display:'swap'});

export const roboto_mono=Roboto_Mono({subsets:['latin'],display:'swap'});

// fonts with variables
export const fraunces=Fraunces({subsets:['latin'],display:'swap', variable:'--font-fraunces'});
export const cormorant=Cormorant({subsets:['latin'],display:'swap', variable:'--font-cormorant'});

// local fonts
export const signika=localFont({src:'./local-fonts/signika.ttf',style:'italic'})

