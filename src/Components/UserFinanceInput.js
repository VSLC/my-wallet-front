import styled from 'styled-components'
const UserFinanceInputs = ({ day, description, price, type }) => {
  return (
    <Paragraph type={type}>
      <div className='paragraphDayDescription'>
        <p className='date'>{day}</p>
        <p>{description}</p>
      </div>
      <div className='paragraphPrice'>
        {price}
      </div>
    </Paragraph>
  );
}

export default UserFinanceInputs;

const Paragraph = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .paragraphDayDescription{
    display: flex;
    margin-top: 20px;
    gap: 10px;
  }
  .paragraphPrice{
    margin-top: 20px;
  }
  .date {
    color:#C6C6C6;  
  }
  .paragraphPrice{
    color: ${props => (props.type === 'deposit' ? "green " : "red")};
  }
`