import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import TripForm from '../components/TripForm'
import TripPreview from '../components/TripPreview'

const emptyTrip = {
  destination: '',
  dates: '',
  budget: '',
  activities: '',
}

function PlannerPage() {
  const [trip, setTrip] = useState(emptyTrip)
  const [savedTrip, setSavedTrip] = useState(null)

  function handleSave(event) {
    event.preventDefault()
    setSavedTrip(trip)
  }

  return (
    <>
      <h1 className="mb-4">Trip Planner</h1>
      <p className="lead mb-4">
        Start a simple trip draft by entering a destination, dates, budget, and
        activity ideas.
      </p>

      <Row className="g-4">
        <Col lg={6}>
          <TripForm trip={trip} onTripChange={setTrip} onSave={handleSave} />
        </Col>
        <Col lg={6}>
          <TripPreview trip={trip} savedTrip={savedTrip} />
        </Col>
      </Row>
    </>
  )
}

export default PlannerPage
