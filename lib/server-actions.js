'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache";

export async function shareMeal(formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        image: formData.get('image')
    }

    // TODO: add validation (L.125)

    await saveMeal(meal);
    revalidatePath('/meals', 'layout'); // To avoid strong caching in prod.
    redirect('/meals')
}