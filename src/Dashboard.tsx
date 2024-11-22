type UserProps = {
  username: string;
};

export const Dashboard = (props: UserProps) => {
  return (
    <div>
      Props TS
      <h1>{props.username} </h1>
    </div>
  );
};
