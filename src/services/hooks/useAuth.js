import { useSelector } from 'react-redux'
import {  selectIsRefreshing, selectIsToken } from "../../redux/auth/authSelector"

export const useAuth = () => {
    return {
    isRefreshing: useSelector(selectIsRefreshing),
    token: useSelector(selectIsToken)
  }
}