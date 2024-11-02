import Swal from "sweetalert2";
import store from "../../redux/store/store";
import {EditToDo} from "../../redux/state/todo/todoSlice";

export function TodoEditAlert(i,item){

    Swal.fire({
        title: 'Update Task Name',
        input: 'text',
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditToDo(
                    {
                        index:i,
                        task:value
                    }
                ))
            }
        }
    })

}