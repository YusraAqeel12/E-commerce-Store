redux mai ham data ko manage ya store kartay hain 
tool jis sai ham data ko kisi per component ya kisi bhee page per get karsaktay hain 
redux ki state ko sirf reducer change kar sakta hai koi aur function nahi change karsakta

Pehlay store k afolder banay ga jismai slice banao ab store kai liyae store.tsx ki file banao
ab aik file banao provider ki aur layoat ka material usmai copy karo

state ko GET karnay kai liyae yeh line likhna zaroori hai aur usko import karana aur client side use karna 
useAppSelector((state)=>state.productArray)

state jab manipulate hogi toh wo usedispatch kai zariya hota hai

RTK QUERY 
Tool jissai hum data ko fetch karkai cache mai store kardaitay hain and we get it through redux tool kit  