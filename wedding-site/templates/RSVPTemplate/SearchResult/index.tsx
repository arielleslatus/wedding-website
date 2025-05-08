/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { WeddingGuest } from '../../../apiClient/names';
import { Checkbox } from '../../../components/Checkbox';
import { invitationStyle } from './index.css';

interface SearchResultProps {
    id: string;
    weddingGuests: WeddingGuest[];
    isChecked: boolean;
    onCheck: () => void;
}

export const SearchResult: React.FC<SearchResultProps> = ({
    id,
    weddingGuests,
    isChecked,
    onCheck,
}) => {
    const getGuests = () => {
        const guests: string[] = [];
        weddingGuests.forEach((guest) => {
            const guestString = guest.firstName + ' ' + guest.lastName;
            guests.push(guestString);
        });
        return guests.join(' & ');
    };

    return (
        <div className={invitationStyle}>
            <Checkbox
                label={getGuests()}
                id={id}
                onChange={onCheck}
                checked={isChecked}
            />
        </div>
    );
};
