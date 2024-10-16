import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'


const TodoItem = ({ id, text, isComplete, deleteTodo, toogel } ) => {
  return (
    <div className=' flex items-center my-3 gap-2'>

        <div className='flex flex-1 items-center cursor-pointer'>
            <img onClick={()=>toogel(id)}  src={isComplete ? tick: not_tick} alt="" className='w-7' />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
              ${isComplete ? "line-through" : " "}`}>{text}</p>
        </div>
        <img className='w-3.5 cursor-pointer' onClick={()=>deleteTodo(id)} src={delete_icon}alt="" />
    </div>
  )
}

export default TodoItem