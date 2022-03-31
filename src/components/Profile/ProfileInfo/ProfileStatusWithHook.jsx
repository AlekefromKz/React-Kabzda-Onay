import React, {useEffect, useState} from 'react';

const ProfileStatusWithHook = React.memo((props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);

    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode && (
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        value={status}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                    />
                </div>
            )}
        </div>
    );
});

export default ProfileStatusWithHook;
