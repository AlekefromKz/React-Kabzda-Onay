import Dialogs from "./Dialogs";
import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateNewMessage}),
    withAuthRedirect,
)(Dialogs);