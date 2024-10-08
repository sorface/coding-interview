using Interview.Domain.Repository;
using Interview.Domain.Rooms.RoomParticipants;

namespace Interview.Domain.Rooms;

public interface IRoomRepository : IRepository<Room>
{
    Task<bool> HasUserAsync(Guid roomId, Guid userId, CancellationToken cancellationToken = default);

    Task<RoomParticipant?> FindParticipantOrDefaultAsync(Guid roomId, Guid userId, CancellationToken cancellationToken = default);

    Task<bool> IsReadyToCloseAsync(Guid roomId, CancellationToken cancellationToken);
}
