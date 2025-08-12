import { Header, TripCard } from "components"
import StatsCards from "components/StatsCard"
import { dashboardStats, user, allTrips } from "~/constants"

const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } =
  dashboardStats

const dashboard = () => {
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCards
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCards
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCards
            headerTitle="Active Users "
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>
        <div className="trip-grid">
          {allTrips
            .slice(0, 4)
            .map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
              <TripCard
                key={id}
                id={id.toString()}
                name={name}
                location={itinerary?.[0]?.location ?? ""}
                imageUrl={imageUrls[0]}
                tags={tags}
                price={estimatedPrice}
              />
            ))}
        </div>
      </section>
      <TripCard />
    </main>
  )
}

export default dashboard
