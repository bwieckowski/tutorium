export type  BrakepointsName = 'mobile' | 'tablet' | 'ipad' | 'desktop' | 'lgDesktop';
type Brakepoints = {
  [name in BrakepointsName]: number
}

export const breakposints: Brakepoints  = {
  mobile : 320,
  tablet: 768,
  ipad: 992,
  desktop: 1200,
  lgDesktop: 2500
}


export const brakepointsNames = ['mobile','tablet' , 'ipad' , 'desktop' , 'lgDesktop'];
export const from = ( breakpoint: BrakepointsName ) =>( `@media(min-width: ${breakposints[breakpoint]}px)`);

