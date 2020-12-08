import React from 'react'
import MobileNav from '../components/MobileNav'
import Transactions from '../components/Transactions'
import accounts from "../assets/accountsList"
import "../styles/Landing.css"
import {motion} from "framer-motion"
import {useHistory, Link} from "react-router-dom"

const containerVariants = {
    hidden: {
     opacity: 0
    },
    visible: {
      opacity: 1
    },
    exit: {
        top: 0,
        left: 0,
        height: "35vh",
        width: "100%",
        transition: {
            duration: 1
          }
    }
  }

const accountVariants = {
    hidden: {
     opacity: 0
    },
    visible: {
      opacity: 1
    },
    exit: {
        height: "100%",
        width: "100%",
        transition: {
            duration: 1,
            delay: 1
          }
    }
  }

const bottomVariants = {
    hidden: {
     opacity: 0
    },
    visible: {
      opacity: 1
    }, 
    exit: {
        height: "65vh",
        transition: {
            duration: 1
          }
    }
  }

function Landing() {
    const history = useHistory()
    return (
        <div className="landing">
            
            <div className="landing__nav-avatar">
                <img src="https://avatars3.githubusercontent.com/u/46921146?s=460&u=97c3266ed5d5e0f46e3b1707a0ee9aefa40d6ba8&v=4" alt="user icon"/>
            </div>
           .
            <p className="landing__greeting">Morning Ben</p>

            <p className="landing__accounts-title">Your Accounts</p>

            <motion.div 
            className="landing__accounts-list"
            variants={containerVariants}
            animate={"visible"}
            initial={"hidden"}
            exit={"exit"}>

                {accounts.map(account => (
                    <Link to={"/"}>
                    <motion.div
                    variants={accountVariants}
                    animate={"visible"}
                    initial={"hidden"}
                    exit={"exit"}
                    className="landing__account-item"
                    >
                        <motion.p className="owed">You're owed</motion.p>

                        <motion.p className="owed-amount">
                            £ <span>{account.owed}</span>
                        </motion.p>

                        <motion.div className="landing__account-item-avatar">
                            <img src="https://avatars3.githubusercontent.com/u/46921146?s=460&u=97c3266ed5d5e0f46e3b1707a0ee9aefa40d6ba8&v=4" alt="user icon"/>
                        </motion.div>

                    </motion.div>
                    </Link>
                ))}

            </motion.div>


            <motion.div
            variants={bottomVariants}
            animate={"visible"}
            initial={"hidden"}
            exit={"exit"}
            className="bottom-container">

                <Transactions/>

                <MobileNav/>

            </motion.div>
        </div>
    )
}

export default Landing
