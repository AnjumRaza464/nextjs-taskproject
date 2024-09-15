'use client'
// import prisma from '@/utils/db';
// import { revalidatePath } from 'next/cache';
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus,useFormState } from 'react-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

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
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='btn join-item btn-primary'
      disabled={pending}
    >
      {pending ? 'please wait... ' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      return;
    }
    if (state.message) {
      toast.success('task created....');
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
      <div className='join w-full'>
        <input
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          type='text'
          name='content'
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskFormCustom;