import { Alert, Card, ListGroup } from 'react-bootstrap'

function TripPreview({ trip, savedTrip }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title>Trip Preview</Card.Title>
        <Card.Text className="text-muted">
          This preview updates as you type.
        </Card.Text>

        <ListGroup variant="flush" className="text-start">
          <ListGroup.Item>
            <strong>Destination:</strong> {trip.destination || 'Not selected yet'}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Dates:</strong> {trip.dates || 'No dates entered'}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Budget:</strong> {trip.budget || 'No budget entered'}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Activities:</strong> {trip.activities || 'No activities added'}
          </ListGroup.Item>
        </ListGroup>

        {savedTrip && (
          <Alert variant="success" className="mt-3 mb-0">
            Draft saved for {savedTrip.destination || 'your trip'}.
          </Alert>
        )}
      </Card.Body>
    </Card>
  )
}

export default TripPreview
