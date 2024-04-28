import axios from "axios";
import { atom, selector, atomFamily,selectorFamily } from "recoil";


/*export const infoAtom = atom({
    key: "infoAtom",
    default: selector({
        key: 'infoSelector',
        get: async function () {
            console.log(1)
            const info = await axios.get("https://api.github.com/users/kshaan-ali")
            console.log(2)
            return info.data
        }
    })
})*/
//default:{
//   name:'',
//   username:'',
//   follower:0,following:0,links:''
//}

export const infoAtomFamily = atomFamily({
    key: "infoAtomFamily",
    default:selectorFamily({
        key:'infoSelectorFamily',
        get: function(id){
            return async function(){
                const  res=await axios.get('https://api.github.com/users/'+id)
                return res.data
            }
        }
    })

})