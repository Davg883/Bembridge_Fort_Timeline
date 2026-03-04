import json
import os

def generate_lore_pack(persona_id):
    # Resolving the path to the newly created persona_mapper.json
    base_dir = os.path.dirname(os.path.abspath(__file__))
    mapper_path = os.path.join(base_dir, 'persona_mapper.json')
    
    with open(mapper_path, 'r') as f:
        data = json.load(f)
    
    # In persona_mapper.json, the data is a list under the key "personas"
    subject = next((p for p in data["personas"] if p["id"] == persona_id), None)
    
    if not subject:
        raise ValueError(f"Persona with ID '{persona_id}' not found.")
    
    # Logic: Combine real history with Game Mechanics
    lore_pack = {
        "identity": subject["name"],
        "era": "1942_BLITZ",
        "visual_anchor": "Subject_Alpha", # Identity Lock for Nano Banana
        "required_artifacts": ["BS 1363 sockets", "AMES Radar blueprints"],
        "secret_directive": subject["secret_instruction"]
    }
    return lore_pack

# Example Usage:
if __name__ == "__main__":
    pack = generate_lore_pack("living_ghost_01")
    print(json.dumps(pack, indent=4))
