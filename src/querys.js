import { gql } from "@apollo/client";

export const query = gql`
  query {
    stations {
      gtfsId
      name
      lat
      lon
      vehicleMode
      stoptimesWithoutPatterns(numberOfDepartures: 1) {
        stop {
          platformCode
        }
        serviceDay
        scheduledArrival
        scheduledDeparture
        realtimeDeparture
        trip {
          route {
            shortName
            mode
          }
        }
        headsign
      }
    }
  }
`;

export const scheduleQuery = gql`
  query Station($station: String!) {
    station(id: $station) {
      name
      stoptimesWithoutPatterns(numberOfDepartures: 20) {
        stop {
          platformCode
        }
        serviceDay
        scheduledArrival
        scheduledDeparture
        realtimeDeparture
        trip {
          route {
            shortName
            mode
          }
        }
        headsign
      }
    }
  }
`;
