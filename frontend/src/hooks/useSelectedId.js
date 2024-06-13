import { useState } from 'react';

const useSelectedId = () => {
    const [selectedId, setSelectedId] = useState(null);

    const handleSelectId = (id) => {
        setSelectedId(id);
    };

    return {
        selectedId,
        handleSelectId,
    };
};

export default useSelectedId;