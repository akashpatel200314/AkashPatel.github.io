import { Button, Card, Form } from 'react-bootstrap'

function TripForm({ trip, onTripChange, onSave }) {
  function handleChange(event) {
    const { name, value } = event.target
    onTripChange({
      ...trip,
      [name]: value,
    })
  }

  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title>Build a Trip</Card.Title>
        <Form onSubmit={onSave}>
          <Form.Group className="mb-3" controlId="destination">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              name="destination"
              value={trip.destination}
              onChange={handleChange}
              placeholder="Madison, WI"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="dates">
            <Form.Label>Dates</Form.Label>
            <Form.Control
              name="dates"
              value={trip.dates}
              onChange={handleChange}
              placeholder="May 10 - May 14"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="budget">
            <Form.Label>Estimated Budget</Form.Label>
            <Form.Control
              name="budget"
              value={trip.budget}
              onChange={handleChange}
              placeholder="$750"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="activities">
            <Form.Label>Activity Ideas</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="activities"
              value={trip.activities}
              onChange={handleChange}
              placeholder="Museums, restaurants, hiking..."
            />
          </Form.Group>

          <Button type="submit" variant="success">
            Save Draft
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default TripForm
