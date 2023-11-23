import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import '../styles/Timetable.css';

const league: string = "League 1";
const division: string = "Division 1";
const numberOfRounds: number = 10;

const Timetable: React.FC = () => {

    const rounds: number[] = Array.from({ length: numberOfRounds }, (_, index) => index + 1);

    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd/MM/yyyy');
    const formattedTime = format(currentDate, 'hh:mm a');

    return (
        <section className='timetable-wrapper'>
            <div id='division-info'>
                <div id='division-header'>
                    <h2>{division}</h2>
                    <h4>{league}</h4>
                </div>
                <div id='division-links'>
                    <button>Fixture</button>
                    <button>Ladder</button>
                    <button>Stats</button>
                </div>
            </div>
            <div id='round-info'>
                {rounds.map((roundNumber: number) => (
                    <p key={roundNumber}>Round {roundNumber}</p>
                ))}
            </div>
            <div id='round-time'>
                <p>Current Date: {formattedDate}</p>
                <p>Current Time: {formattedTime}</p>
            </div>
            <div id='teams-versing'>

            </div>
        </section>
    );
};

export default Timetable;