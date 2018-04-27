import { connect, Dispatch, MapDispatchToProps, MapStateToProps } from "react-redux";
import { IAppState } from "../redux/store";
import { setVisibilityFilter } from "../redux/visibility/visibility";
import Link from "../components/link";
import { ReactNode } from "react";

interface IOwnProps{
    filter: string;
    children: ReactNode;
}

interface IStateProps {
    active:boolean;
}

interface IDispatchProps {
    onClick: () => void;
}

let mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IAppState>;
let mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps>;

mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibility
})

mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const LinkContainer = connect<IStateProps, IDispatchProps, IOwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default LinkContainer;