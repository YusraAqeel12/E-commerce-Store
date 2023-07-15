shadcn download karo and layoat mai children hamara homepage hai toh ab sab page mai header laanay kai liyae layoat kai uper header import karo
views ka folder banao aur usmai sab routing waalay pages add karo
tsconfig ki file mai baseurl add kardo for 
badge ko shadcn sai download karo and then apna hero section mnai call karo
layoat mai padding add karsakti ho 
flex one sai 50% width hogi dono 
justify evenly mai left aur right mai utna sab hoga jitna product ka 
justify between mai left right mai space nahi aayi ga 

Differne between static and dynamic website ////
sanity sai jo products aayingy wo array sai aayingee

products ka data

navigation kai liyae app kai under product ka folder banao aur usmai page.tsx ki file banao and then header mai us allproduct mai path do app kai under file banai ge not in src

Dyanamic routing mai url ki basis pere routing hoti hai toh uskai liyae folder banai and then copy the code

aik page per aik hone hona cahiyae this is good practise
==sirf value ko compare karta hai aur === value aur type ko compare karta hai

span is inline jitnay words hain utnay line laiga liken div full tag hai poori width laiga 

map ka function mai () bracket laganay per return nahi karna hota liken {} mai karna hota hai

DIFFERENCE BETWEEN SERVER AND CLIENT COMPONENTS
components that rendered and fetched in server ismai html server per tyaar hokar borwser mai milti hai drawback hai kai onclick ka function nahi use karsajtay q kai yeh js hai 

aap ko server sai js milti hai and client mai rendered hoti hai pehlay read karay ga aur phir html tags banai ga
client mai server component nahi paas saktay liken server mai client paas karsaktay hain

data agar static hai toh server agar user interact karta hai toh wo client side per hogi input feilds onclick aur clientside components chotay chunks per banana 

state koi variable hoti hai jismai ham value store hoti hai aur uski value chyange karsaktay hain
redux aik centre store hai jismai ham state manage aur update karsaktay hai through actions
view ki wajah sai action trigger hota hai and then state changes 
action dispatched , action ki type anf then payload jismai arg ya value hoti hai
action store kai paas jaata hai store mai reducer hai and then reducer change state of store
use state local states ko change kai liyae use kartay hain liken redux global state management kai liyae hai  

redux download karna and src per store ki folder banana
npm install @reduxjs/toolkit
npm install react-redux

globalo states mai jitni bhee cheezain aati hai wo sab slice mai aati hai toh slice ka folder banao
Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

Recoil is a state management library for react .download the package
wrap our app to recoil root\

sanity mai jo data hai uska structure banana hoga jis ko schema kahtay hain
apikey cors orgin env ki file mai daalna
document data type batata hai kai aik model hai uskai andar feilds hain
lib mai sanityclient banao it will help connect nextjs with sanity
sanity image url mai image ka data pass karo aur wo return karay ga url