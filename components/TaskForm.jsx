// import prisma from '@/utils/db';
// import { revalidatePath } from 'next/cache';
import { createTask } from "@/utils/actions";

// const createTask = async (formData) => {


  // 'use server';
  // const content = formData.get('content');
  // // some validation here

  // await prisma.task.create({
  //   data: {
  //     content,
  //   },
  // });
  // // revalidate path
  // revalidatePath('/tasks');
// };

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          type='text'
          name='content'
          required
        />
        <button type='submit' className='btn join-item btn-primary'>
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;