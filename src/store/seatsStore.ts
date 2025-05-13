import { create } from 'zustand';

interface SeatsState {
  selectedSeats: string[];
  toggleSeat: (seatId: string) => void;
  clearSeats: () => void;
}

export const useSeatsStore = create<SeatsState>((set) => ({
  selectedSeats: [],
  toggleSeat: (seatId: string) =>
    set((state) => ({
      selectedSeats: state.selectedSeats.includes(seatId)
        ? state.selectedSeats.filter((s) => s !== seatId)
        : [...state.selectedSeats, seatId],
    })),
  clearSeats: () => set({ selectedSeats: [] }),
}));
