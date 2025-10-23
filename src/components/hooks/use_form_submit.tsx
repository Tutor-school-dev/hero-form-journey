import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { FormData } from '.././RegistrationForm'

export const use_form_submit = () => {
  const [loading, setloading] = useState(false)
  const [Progress, setProgress] = useState(10)

  const form_submit_hook = async (data: FormData) => {
    try {
      setloading(true)
      setProgress(10)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/campaign/submission`, {
        parentName: data.parentName,
        parentEmail: data.parentEmail,
        parentPhone: data.parentPhone,
        childName: data.childName,
        childAge: data.childAge,
        theme: data.theme,
        slokaRecited: data.slokaRecited
      });

      // console.log(response.data);
      

      if (response.data.upload_url) {
        setProgress(30)
        await axios.put(response.data.upload_url, data.video, {
          headers: {
            'Content-Type': 'video/mp4'
          }
        })
      }
      setProgress(70)

      toast.success("Gitopadesh submitted successfully!");
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false)
      setProgress(100)
    }
  }
  return { form_submit_hook, loading, Progress };
}