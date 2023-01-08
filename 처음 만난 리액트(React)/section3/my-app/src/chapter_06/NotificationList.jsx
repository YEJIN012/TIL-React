import React from "react";
import { useEffect } from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        message: "안녕하세요? 오늘 일정 알려드릴께요.",
    },
    {   
        id : 2,
        message: "ㅋㅋㅋㅋ",
    },
    {   
        id : 3,
        message: "하이염",
    },
]

var timer

class NotificationList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notifications: [],
        }
    }

    componentDidMount() {
        const {notifications} = this.state
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length
                notifications.push(reservedNotifications[index])
                this.setState({
                    notifications: notifications,
                })
            } else {
                this.setState({
                    notifications: [],
                })
                clearInterval(timer)
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((x) => {
                    return (
                        <Notification
                            key = {x.id}
                            id = {x.id}
                            message={x.message}
                        />
                    )
                })}
            </div>
        )
    }

    // 리액트 버전18에서의 Strict Mode 동작 변경을 반영하기 위해 필요한 부분.
    componentWillUnmount() {
        if(timer) {
            clearInterval(timer)
        }
    }
}

export default NotificationList


function UserStatus(props) {
    const [isOnline, setIsOnline] = userState(null)

    function handleStatusChange(status) {
        setIsOnline(status.isOnline)
    }
    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)

        // 컴포넌트가 unmount 될 때 호출됨!
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
        }
    })

    if (isOnline === null) {
        return '대기중...'
    }
    return isOnline ? '온라인' : '오프라인'
}