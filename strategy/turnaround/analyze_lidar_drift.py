def analyze_lidar_drift(scan_data):
    """
    Analyzes the "Blue Slipper" clay movement using continuous LiDAR scanning.
    A drift threshold of 0.1mm is the baseline for masonry stability.
    """
    drift_threshold = 0.1 # mm
    
    if 'movement' not in scan_data:
        raise ValueError("scan_data must contain a 'movement' key with a numerical value in mm.")
        
    if scan_data['movement'] > drift_threshold:
        return "HALT! Movement detected. Triggering structural intervention."
    else:
        return "Refusal Wall intact. Masonry stable."

# Example Usage:
if __name__ == "__main__":
    # Simulated data from the Deterministic Skull IoT sensors
    stable_scan = {'movement': 0.05}
    unstable_scan = {'movement': 0.15}
    
    print(f"Stable Scan (0.05mm): {analyze_lidar_drift(stable_scan)}")
    print(f"Unstable Scan (0.15mm): {analyze_lidar_drift(unstable_scan)}")
