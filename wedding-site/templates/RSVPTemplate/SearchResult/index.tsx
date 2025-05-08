/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { WeddingGuest } from '../../../apiClient/names';
import { invitationStyle } from './index.css';

interface SearchResultProps {
    weddingGuests: WeddingGuest[];
}

export const SearchResult: React.FC<SearchResultProps> = ({
    weddingGuests,
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
            <input type="radio" />
            <p>{getGuests()}</p>
        </div>
    );
};
