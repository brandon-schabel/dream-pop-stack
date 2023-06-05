import Card from "~/components/card";
import performer from "~/mocks/performer.json";

export default function hundredXPage() {
  return (
    <div className="p-4">
      <div className="flex space-y-4">
        <div>Logo Here</div>
        <div>
          Peformer info section
          <div>Current Performer:</div>
          <div>
            {performer.first_name} {performer.last_name}
          </div>
          <div>{performer.height}</div>
          <div>{performer.weight}</div>
        </div>
        {/*  */}
        {/* <Checkbox /> */}
        status: In Session
      </div>
      <div className="flex flex-col space-y-4 w-full lg:flex-row lg:space-x-4 lg:space-y-0">
        <Card className="w-full">
          <Card.Title className="p-4">Control Panel Card</Card.Title>
          <Card.Body>
            <div>Card Body</div>
          </Card.Body>
        </Card>

        <Card className="w-full">
          <Card.Title className="p-4">Video Chat</Card.Title>
        </Card>

        <Card className="w-full">
          <Card.Title className="p-4">Annoucements</Card.Title>
        </Card>
      </div>

      <Card className="w-full mt-4">
        <Card.Title className="p-4">Performer Queue</Card.Title>
      </Card>
    </div>
  );
}
