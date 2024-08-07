using Interview.Domain.Rooms.Records.Request;

namespace Interview.Backend.Rooms;

/// <summary>
/// Room Create Api Request.
/// </summary>
public class RoomCreateApiRequest
{
    public string Name { get; set; } = string.Empty;

    public string AccessType { get; set; } = SERoomAccessType.Public.Name;

    public List<RoomQuestionRequest> Questions { get; set; } = new();

    public HashSet<Guid> Experts { get; set; } = new();

    public HashSet<Guid> Examinees { get; set; } = new();

    public HashSet<Guid> Tags { get; set; } = new();

    public long? Duration { get; set; }

    public DateTime ScheduleStartTime { get; set; }
}
