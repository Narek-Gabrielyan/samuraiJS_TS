import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../Store/hooks"
import { useEffect } from "react"
import { fetchProfilePage } from "../../../Store/Slices/profileSlice"
import "./Profile.css"

export default function Profile() {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(fetchProfilePage(id))
    }, [id])

    const a = useAppSelector((state) => state.profileData.profile)
    console.log(a);

  return (
    <div>Profile</div>
  )
}